// Pacote para ler e escrever em arquivos de sistema
import fs from "fs";
// Pacote para lidar com caminhos de diretórios específicos
import path from "path";
import { PodcastModel } from "../models/podcast-model";

// __dirname com module ele pode apresentar problemas
const pathData = path.join(__dirname, "../repositories/podcasts.json");

export const repositoryPodcast = async (
  podcastName?: string
): Promise<PodcastModel[]> => {
  const encoding = "utf-8";
  const rawData = fs.readFileSync(pathData, encoding);
  let jsonFile = JSON.parse(rawData);
  if (podcastName) {
    jsonFile = jsonFile.filter(
      (podcast: PodcastModel) => podcast.podcastName === podcastName
    );
  }

  return jsonFile;
};
