class ToysController < ApplicationController
    def index

        if params[:sound_id]
            # give me the filtered toys
            @toys = Toy.all().select do | toy |
                toy.sound_id == params[:sound_id].to_i 
            end
        else
            # give me all the toys
            @toys = Toy.all
        end  
        render({ json: @toys, include: [:sound] })
    end

    def show
        @toy = Toy.find( params[:id] )
        render( json: @toy, include: [:sound])
    end

    def create
        byebug
        @newToy = Toy.create(
            name: params[:name],
            color: params[:color],
            price: params[:price],
            sound_id: params[:sound_id]
        )
        render json: @newToy
    end
end
