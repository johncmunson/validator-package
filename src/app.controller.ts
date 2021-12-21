import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';

type PayloadDto = {
  name: string;
  age: number;
};

@Controller()
export class AppController {
  constructor() {}

  @Post()
  endpoint(
    @Body(
      new ValidationPipe({
        validatorPackage: {
          validate: (object: unknown) => {
            console.log('DOES NOT FIRE');
            return [{ property: 'age', value: 'sadfgk' }];
          },
        },
      }),
    )
    payload: PayloadDto,
  ) {
    return { success: true };
  }
}
