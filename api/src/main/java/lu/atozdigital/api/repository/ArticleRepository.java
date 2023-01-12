package lu.atozdigital.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import lu.atozdigital.api.model.Article;


@Repository
public interface ArticleRepository extends JpaRepository<Article,Long>{

}
