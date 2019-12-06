class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :bought_items, :paid_orders
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

  def paid_orders
    self.object.orders.select do |o|
      o.paid == true
    end 
  end 
end
