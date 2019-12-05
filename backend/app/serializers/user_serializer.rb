class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bought_items
  has_many :orders
  # has_many :shoes

  def bought_items
    orders_bought = self.object.orders.select do |o|
      o.paid == true
    end 
    orders_bought.map do |b|
      b.shoes
    end 
    
  end 
end
