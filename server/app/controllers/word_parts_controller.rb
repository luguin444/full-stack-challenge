class WordPartsController < ApplicationController
  def index
    @phonics_level = PhonicsLevel.find(params[:phonics_level_id])

    render json: @phonics_level.word_parts
  end

  def update
    @word_part = WordPart.find(params[:id])

    status = params[:status]
    is_valid_status = WordPart.statuses.keys.include?(status)

    unless is_valid_status
      return render json: { error: "Status not allowed" }, status: :unprocessable_entity
    end

    @word_part.update(status: status)
    render json: @word_part, status: :ok
  end
end
