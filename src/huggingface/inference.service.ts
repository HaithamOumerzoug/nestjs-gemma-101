import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Inference } from './utils/inference';

@Injectable()
export class InferenceService {
  async textGeneration(
    inputs: string,
  ): Promise<{ inputs: string; outputs: string }> {
    if (!inputs || inputs.length === 0) {
      throw new HttpException('Inputs is required', HttpStatus.BAD_REQUEST);
    }
    const inference = Inference.getInstance();
    let outputs = '';
    for await (const output of inference.textGenerationStream({
      model: 'google/gemma-2b',
      inputs,
      parameters: { max_new_tokens: 1000, return_full_text: true },
    })) {
      outputs += output.token.text;
    }
    return { inputs, outputs };
  }
}
