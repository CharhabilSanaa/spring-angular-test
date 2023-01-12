package lu.atozdigital.api.model;

import java.util.Date;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;
import org.springframework.beans.factory.annotation.Autowired;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;


@Entity
@Table(name = "orderitems")
public class OrderItem {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;


    @Column(name = "created_date")
    private Date createdDate;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "order_id", referencedColumnName = "id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Order order;

    @OneToOne
    @JoinColumn(name = "article_id", referencedColumnName = "id")
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Article article;
    
    

    public OrderItem(){
    }

    public OrderItem(Order order, Article article) {
        this.article = article;
        this.order= order;
        this.createdDate = new Date();
    }
    
    
    //--------------------
    
    

    public Article getArticle() {
        return article;
    }

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public void setArticle(Article article) {
        this.article = article;
    }



    public Date getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(Date createdDate) {
        this.createdDate = new Date();
    }

    public Order getOrder() {
        return order;
    }

    public void setOrder(Order order) {
        this.order = order;
    }
}
