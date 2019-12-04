class Shoe < ApplicationRecord  
    belongs_to :category    
    has_many :joiners
end
