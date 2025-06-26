export const insertOrUpdateBoqs = async (database, boqsList) => {
  await database.write(async () => {
    for (const boq of boqsList) {
      const existing = await database.get('boqs').query(Q.where('id', boq.id)).fetch();

      if (existing.length) {
        await existing[0].update(record => {
          record.name = boq.name;
          record.quantity = boq.quantity;
          record.rate = boq.rate;
          record.work_id = boq.workId;
        });
      } else {
        await database.get('boqs').create(record => {
          record._raw.id = boq.id; 
          record.name = boq.name;
          record.quantity = boq.quantity;
          record.rate = boq.rate;
          record.work_id = boq.workId;
        });
      }
    }
  });
};


const syncAllData = async (response) => {
  const { approvalFlows, boqsList, clientEntities, contractorsList, ...rest } = response;

  await insertOrUpdateBoqs(database, boqsList);
  await insertOrUpdateApprovalFlows(database, approvalFlows);
  await insertOrUpdateContractors(database, contractorsList);
  // continue for all properties
};
