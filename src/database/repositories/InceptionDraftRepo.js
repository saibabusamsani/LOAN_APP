import InceptionDraft from "../models/InceptionDraft";
import { database } from "../index"
const addInceptionDraft = async (draftData) => {
  const draftsCollection = database.get(InceptionDraft.table);
  await database.write(async () => {
    await draftsCollection.create(draft => {
      draft.date = draftData.date;
      draft.time = draftData.time;
      draft.address = draftData.address;
      draft.capturedImages = draftData.capturedImages;
      draft.latitude = draftData.latitude;
      draft.longitude = draftData.longitude;
    });
  });
};

export {addInceptionDraft};