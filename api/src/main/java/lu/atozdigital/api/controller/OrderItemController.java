package lu.atozdigital.api.controller;

import java.awt.PageAttributes.MediaType;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import lu.atozdigital.api.common.ApiResponse;
import lu.atozdigital.api.model.Article;
import lu.atozdigital.api.model.Order;
import lu.atozdigital.api.model.OrderItem;
import lu.atozdigital.api.repository.ArticleRepository;
import lu.atozdigital.api.repository.OrderItemRepository;
import lu.atozdigital.api.repository.OrderRepository;
import lu.atozdigital.api.service.OrderItemService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/")
public class OrderItemController {
	
	
	@Autowired
    private OrderItemRepository orderItemRepository;
	
	@Autowired
    private ArticleRepository articleRepository;
	
	@Autowired
    private OrderRepository orderRepository;
	
    
  	//@PostMapping("/ordersitems/add")
	@CrossOrigin(origins = "*")
	@RequestMapping(value = "/ordersitems/add/{article_id}", method = RequestMethod.POST)
  	public OrderItem createOrderItem(@PathVariable(value = "article_id") long articleId,
  			@RequestBody OrderItem orderItem) {
		
		
		List<OrderItem> newOrderItems = new ArrayList<OrderItem>();

        Optional<Article> byId = articleRepository.findById(articleId);
        Article article = byId.get();
        
		//Get the last id order and use it:
        long newId=orderRepository.getIdTheLastOrder();
        
        //
        Optional<Order> IdOrder = orderRepository.findById(newId);
        Order order = IdOrder.get();
        
        //orderItem.setId(neworderId);
        orderItem.setArticle(article);
        orderItem.setOrder(order);
		orderItem.setCreatedDate(new Date());
		
		//push the orderitem created to the list:
		newOrderItems.add(orderItem);
		
		//go back to order created to save it:
    	/*String newReference="tuiwiwbdhdhd";
		order.setOrderItems((List<OrderItem>) newOrderItems); //add list of ordered item to the new order
        order.setCreatedDate(new Date());
        order.setReference(newReference);
        orderRepository.save(order);*/

  		return orderItemRepository.save(orderItem);
  	}

}
