defmodule WheredafuckruApi.PositionView do
  use WheredafuckruApi.Web, :view

  def render("index.json", %{positions: positions}) do
    %{data: render_many(positions, WheredafuckruApi.PositionView, "position.json")}
  end

  def render("show.json", %{position: position}) do
    %{data: render_one(position, WheredafuckruApi.PositionView, "position.json")}
  end

  def render("position.json", %{position: position}) do
    %{id: position.id,
      identifier: position.identifier,
      latitude: position.latitude,
      longitude: position.longitude,
      inserted_at: position.inserted_at}
  end
end
