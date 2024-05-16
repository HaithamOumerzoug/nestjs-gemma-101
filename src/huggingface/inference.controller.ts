import { Controller, Post, Query } from '@nestjs/common';
import { InferenceService } from './inference.service';

@Controller('inference')
export class InferenceController {
  constructor(private inferenceService: InferenceService) {}

  @Post('/text/generation')
  textGeneration(@Query('inputs') inputs: string) {
    return this.inferenceService.textGeneration(inputs);
  }
}
