import mongoose from "mongoose";
import { IFixtures } from "../interfaces/fixtures.interface";
import { fixturesSchema } from "./schemas/fixtures.schema";

const fixturesModel = mongoose.model<IFixtures & mongoose.Document>('Fixtures', fixturesSchema);

export default fixturesModel;