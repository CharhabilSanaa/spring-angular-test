package lu.atozdigital.api.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import lu.atozdigital.api.model.Article;

import lu.atozdigital.api.repository.ArticleRepository;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/")
public class ArticeController {

	@Autowired
	private ArticleRepository articleRepository;
	
	//get all articles:
	@CrossOrigin(origins = "*")
	@GetMapping("/articles")
	public List<Article> getAllArticle(){
		return articleRepository.findAll();
	}
	
	
	//get article by id:
	@CrossOrigin(origins = "*")
	@GetMapping("/articles/{id}")
	public Optional<Article> findById(@PathVariable("id") Long id) {
        return articleRepository.findById(id);
    }
	
	//create a new article
	@PostMapping("/articles/add")
	public Article createArticle(@RequestBody Article article) {
		return articleRepository.save(article);
	}
	
	
	
	//save article:
	public void saveArticle(Article article) {
		articleRepository.save(article);
    }
	
	
	
	
	
}
