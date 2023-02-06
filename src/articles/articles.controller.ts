import { Controller,Post,Body,Get,Put,Delete, UsePipes} from '@nestjs/common';
import { CreateArticleDto } from './dto/create-article.dto';
import { ArticlesService } from './articles.service';
import { UpdateArticleDto } from './dto/update-article.dto';
import { DeleteArticleDto } from './dto/delete-article.dto';


@Controller('articles')
export class ArticlesController {
    constructor(private articlesService:ArticlesService){}

    @Post()
    create(@Body() articleDto:CreateArticleDto){
        return this.articlesService.createArticle(articleDto);
    }
    @Get()
    getAll(){
        return this.articlesService.getAllArticles();
    }
    @Put()
    update(@Body() articleDto:UpdateArticleDto)
    {
        return this.articlesService.updateArticle(articleDto)
    }
    @Delete()
    delete(@Body() articleDto:DeleteArticleDto)
    {
        return this.articlesService.deleteArticle(articleDto);
    }

}
