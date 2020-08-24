class UsersController < ApplicationController

    before_action :authenicate_user, only: [:show]

    def create
        @user = User.create(user_params)
        if @user.valid?
            created_jwt = issue_token({id: @user.id})
        cookies.signed[:jwt] = {value: created_jwt, httponly: true, expires: 1.hour.from_now}
            render json: @user
        else
            render json: {error: "You have entered incorrect information, please try again."}
        end
    end


    private

    def user_params
        params.require(:user).permit(:username, :email, :password)
    end

    
end
