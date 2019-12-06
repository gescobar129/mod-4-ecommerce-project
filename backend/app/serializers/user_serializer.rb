class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :orders
  has_many :shoes

  def paid_orders
    self.object.orders.select do |o|
      o.paid == true
    end 
  end
  
end
