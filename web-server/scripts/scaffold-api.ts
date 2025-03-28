// generate files for an api for a nestjs project using prisma posgrest as ORM and database

import { mkdirSync } from 'fs';
import { writeFile } from 'fs/promises';
import { resolve } from 'path';

export const generateDtoFile = (apiNameSingular: string) => {
  const pascalCased =
    apiNameSingular.charAt(0).toUpperCase() + apiNameSingular.slice(1);
  const createDtoLines: string[] = [];
  const updateDtoLines: string[] = [];

  createDtoLines.push(
    `import {} from 'class-validator';
export class Create${pascalCased}Dto {
}`,
  );
  updateDtoLines.push(
    `import {} from 'class-validator';
export class Update${pascalCased}Dto {
}`,
  );
  return {
    createDtoContent: createDtoLines.join('\n'),
    updateDtoContent: updateDtoLines.join('\n'),
  };
};

export const generateServiceFileContent = (apiNameSingular: string) => {
  const lines: string[] = [];
  const pascalCased =
    apiNameSingular.charAt(0).toUpperCase() + apiNameSingular.slice(1);

  lines.push(
    `import { Injectable } from '@nestjs/common';
    import { PrismaService } from 'src/prisma/prisma.service';

    @Injectable()
    export class ${pascalCased}Service {
      constructor(private prisma: PrismaService) {}
    }
`,
  );

  return lines.join('\n');
};

// generate a controller with getList, getMany, getOne, updateOne, updateMany, deleteOne, deleteMany, create methods
export const generateControllerFileContent = (
  apiNameSingular: string,
  apiNamePlural = apiNameSingular + 's',
) => {
  const pascalCased =
    apiNameSingular.charAt(0).toUpperCase() + apiNameSingular.slice(1);

  const lines: string[] = [];
  lines.push(`import {
    Controller,
    Get,
    Post,
    Body,
    Put,
    Param,
    Delete,
    Query,
    ParseIntPipe,
  } from '@nestjs/common';
  import { ${pascalCased}Service } from './${apiNameSingular}.service';
  import { Create${pascalCased}Dto } from './dto/create-${apiNameSingular}.dto';
  import { Update${pascalCased}Dto } from './dto/update-${apiNameSingular}.dto';
  import { QsQuery } from 'src/common/decorators/qsQuery';
  import { QsQueryObject } from 'src/common/class-validators/qs-query.dto';
  
  @Controller('${apiNamePlural}')
  export class ${pascalCased}Controller {
    constructor(private readonly ${apiNameSingular}Service: ${pascalCased}Service) {}
  
    @Post()
    create(@Body() create${pascalCased}Dto: Create${pascalCased}Dto ) {
    }
  
    @Get()
    getList(@QsQuery() query: QsQueryObject) {
    }
  
    @Get('get-many')
    getMany(@QsQuery() query: QsQueryObject) {
    }
  
    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id: number, @QsQuery() query: QsQueryObject) {
    }
  
    @Put('update-many')
    update(@QsQuery() query: QsQueryObject, @Body() update${pascalCased}Dto: Create${pascalCased}Dto ) {
    }
  
    @Put(':id')
    updateOne(@Param('id', ParseIntPipe) id: number, @Body() update${pascalCased}Dto: Update${pascalCased}Dto ) {
    }
  
    @Delete('delete-many')
    deleteMany(@QsQuery() query: QsQueryObject) {
    }

    @Delete(':id')
    deleteOne(@Param('id', ParseIntPipe) id: number) {
    }
  }
  `);

  return lines.join('\n');
};

const generateModuleFileContent = (apiNameSingular: string) => {
  const pascalCased =
    apiNameSingular.charAt(0).toUpperCase() + apiNameSingular.slice(1);
  const lines: string[] = [];
  lines.push(`import { Module } from '@nestjs/common';
import { ${pascalCased}Service } from './${apiNameSingular}.service';
import { ${pascalCased}Controller } from './${apiNameSingular}.controller';

@Module({
  controllers: [${pascalCased}Controller],
  providers: [${pascalCased}Service],
  exports: [${pascalCased}Service],
})
export class ${pascalCased}Module {}
`);
  return lines.join('\n');
};

const scaffoldApi = async (
  apiNameSingular: string,
  apiNamePlural = apiNameSingular + 's',
) => {
  const targetPath = resolve(__dirname, '../src/api', apiNameSingular);
  mkdirSync(resolve(targetPath, 'dto'), { recursive: true });
  const { createDtoContent, updateDtoContent } =
    generateDtoFile(apiNameSingular);
  const serviceContent = generateServiceFileContent(apiNameSingular);
  const controllerContent = generateControllerFileContent(
    apiNameSingular,
    apiNamePlural,
  );
  const moduleContent = generateModuleFileContent(apiNameSingular);
  await Promise.all([
    writeFile(
      resolve(targetPath, `${apiNameSingular}.service.ts`),
      serviceContent,
    ),
    writeFile(
      resolve(targetPath, `${apiNameSingular}.controller.ts`),
      controllerContent,
    ),
    writeFile(
      resolve(targetPath, `${apiNameSingular}.module.ts`),
      moduleContent,
    ),
    writeFile(
      resolve(targetPath, `dto/create-${apiNameSingular}.dto.ts`),
      createDtoContent,
    ),
    writeFile(
      resolve(targetPath, `dto/update-${apiNameSingular}.dto.ts`),
      updateDtoContent,
    ),
  ]);
};

// when run directly, correct args and run scaffold
if (require.main === module) {
  const apiNameSingular = process.argv[2];
  const apiNamePlural = process.argv[3] || undefined;
  if (!apiNameSingular) {
    console.error('Please provide an api name');
    process.exit(1);
  }
  scaffoldApi(apiNameSingular, apiNamePlural)
    .then(() => {
      console.log('Api scaffolded successfully');
    })
    .catch((err) => {
      console.error('Error scaffolding api', err);
    });
}
