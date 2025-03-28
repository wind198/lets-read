import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { EbookService } from './ebook.service';
import { CreateEbookDto } from './dto/create-ebook.dto';
import { UpdateEbookDto } from './dto/update-ebook.dto';
import { QsQuery } from 'src/common/decorators/qsQuery';
import { QsQueryObject } from 'src/common/class-validators/qs-query.dto';

@Controller('ebooks')
export class EbookController {
  constructor(private readonly ebookService: EbookService) {}

  @Post()
  create(@Body() createEbookDto: CreateEbookDto) {}

  @Get()
  getList(@QsQuery() query: QsQueryObject) {}

  @Get('get-many')
  getMany(@QsQuery() query: QsQueryObject) {}

  @Get(':id')
  getOne(
    @Param('id', ParseIntPipe) id: number,
    @QsQuery() query: QsQueryObject,
  ) {}

  @Put('update-many')
  update(
    @QsQuery() query: QsQueryObject,
    @Body() updateEbookDto: CreateEbookDto,
  ) {}

  @Put(':id')
  updateOne(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEbookDto: UpdateEbookDto,
  ) {}

  @Delete('delete-many')
  deleteMany(@QsQuery() query: QsQueryObject) {}

  @Delete(':id')
  deleteOne(@Param('id', ParseIntPipe) id: number) {}
}
