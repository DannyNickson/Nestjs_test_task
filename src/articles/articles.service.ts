import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { Article } from './user.model';
import { DeleteArticleDto } from './dto/delete-article.dto';

@Injectable()
export class ArticlesService {

    constructor(@InjectModel(Article) private articleRepository:typeof Article){}
    
    async createArticle(dto:CreateArticleDto){
        const article = await this.articleRepository.create(dto);
        return article;
    }

    async getAllArticles(){
        const articles = await this.articleRepository.findAll();
        return articles;
    }

    async updateArticle(dto:UpdateArticleDto){
        const article = await this.articleRepository.findByPk(dto.id);
        await article.update({title:dto.title,body:dto.body})
        await article.save();
        return article;
    }
    async deleteArticle(dto:DeleteArticleDto){
        const article = await this.articleRepository.findByPk(dto.id);
        await article.destroy();
        return article;
    }

    

} 
