import { HfInference } from '@huggingface/inference';
import { Logger } from '@nestjs/common';

export class Inference extends HfInference {
  protected static instance: Inference;
  private static readonly logger = new Logger(Inference.name);
  constructor(accessToken: string) {
    super(accessToken);
  }

  static getInstance(): Inference {
    try {
      this.logger.log(`Get Hugging Face Inference instance`);
      console.log(this.instance);

      if (this.instance) {
        return this.instance;
      }
      return this.createInstance();
    } catch (error) {
      this.logger.error(
        `Error while get Hugging Face Inference instance ` + error,
      );
    }
  }

  private static createInstance(): Inference {
    this.logger.log(`Create new Hugging Face Inference instance`);
    return new Inference(process.env.HF_ACCESS_TOKEN);
  }
}
