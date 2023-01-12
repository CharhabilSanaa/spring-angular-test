package lu.atozdigital.api.service;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import jakarta.transaction.Transactional;
import lu.atozdigital.api.model.Order;
import lu.atozdigital.api.model.OrderItem;
import lu.atozdigital.api.repository.OrderItemRepository;

@Service
@Transactional
public class OrderItemService {

    @Autowired
    private OrderItemRepository orderItemRepository;

    public void addOrderedProducts() {
    	// create the order and save it
    	OrderItem newOrderitem = new OrderItem();
    	newOrderitem.setCreatedDate(new Date());
        orderItemRepository.save(newOrderitem);
    }
    
    public void placeOrderItem() {
        
        // create the order and save it
    	OrderItem newOrderitem = new OrderItem();

        orderItemRepository.save(newOrderitem);

    }
    


}