import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { MyBlogTxt } from './interfaces/myblogtxt.interface';
import { Model } from 'mongoose';
import { CreateBlogDto } from './dto/create-blog.dto';

@Injectable()
export class MyblogtxtService {
  constructor(@InjectModel('myblogtxt') private readonly blogModel: Model<MyBlogTxt>) {

  }
  //创建blogs
  async create(createBlogDto: CreateBlogDto): Promise<MyBlogTxt> {
    const createdBlog = new this.blogModel(createBlogDto);
    return await createdBlog.save();
  }
  //获取所有blogs&
  async findAll(): Promise<MyBlogTxt[]> {
    return await this.blogModel.find();
  }
}