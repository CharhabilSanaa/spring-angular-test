package lu.atozdigital.api.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import lu.atozdigital.api.exception.OrderNotFoundException;
import lu.atozdigital.api.model.Order;
import lu.atozdigital.api.repository.OrderItemRepository;
import lu.atozdigital.api.repository.OrderRepository;

@Service
@Transactional
public class OrderService {

 

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    OrderItemRepository orderItemRepository;
    
    public void placeOrder() {
      
    	//reference:
    	String newReference=getAlphaNumericString(20);
        // create the order and save it
        Order newOrder = new Order();
        newOrder.setCreatedDate(new Date());
        newOrder.setReference(newReference);
        orderRepository.save(newOrder);

        // create orderItem and save each one
        /*for (CartItemDto cartItemDto : cartItemDtoList) {
            OrderItem orderItem = new OrderItem();
            orderItem.setCreatedDate(new Date());
            orderItem.setPrice(cartItemDto.getProduct().getPrice());
            orderItem.setProduct(cartItemDto.getProduct());
            orderItem.setQuantity(cartItemDto.getQuantity());
            orderItem.setOrder(newOrder);
            // add to order item list
            orderItemsRepository.save(orderItem);
        }*/
        //
    }
    
    public void savegivenOrder(Order newOrder) {
        orderRepository.save(newOrder);
    }
    
    //random alpha numeric string for reference:
    public static String getAlphaNumericString(int n)
    {
    	
    	// choose a Character random from this String
        String AlphaNumericString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    		+ "0123456789"
    		+ "abcdefghijklmnopqrstuvxyz";

       // create StringBuffer size of AlphaNumericString
       StringBuilder sb = new StringBuilder(n);

       for (int i = 0; i < n; i++) {

       // generate a random number between
       // 0 to AlphaNumericString variable length
       int index= (int)(AlphaNumericString.length()* Math.random());

       // add Character one by one in end of sb
       sb.append(AlphaNumericString.charAt(index));
       }

       return sb.toString();
    }
    
    
    public List<Order> listOrders() {
        return orderRepository.findAll();
    }


    public Order getOrder(Long orderId) throws OrderNotFoundException {
        Optional<Order> order = orderRepository.findById(orderId);
        if (order.isPresent()) {
            return order.get();
        }
        throw new OrderNotFoundException("Order not found");
    }
}