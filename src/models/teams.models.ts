import mongoose from "mongoose";
import { ITeam } from "../interfaces/teams.interface";
import { teamSchema } from "./schemas/teams.schema";

const teamsModel = mongoose.model<ITeam & mongoose.Document>('Teams', teamSchema);

export default teamsModel;