class UsersController < ApplicationController

    before_action :authenicate_user, only: [:show]

    def create

    end

    def show
        
    end
end
