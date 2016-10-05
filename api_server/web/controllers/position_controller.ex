defmodule WheredafuckruApi.PositionController do
  use WheredafuckruApi.Web, :controller

  alias WheredafuckruApi.Position

  def index(conn, %{"identifier" => identifier}) do
    query = from Position,
        where: [identifier: ^identifier],
        order_by: [desc: :inserted_at]
    positions = Repo.all(query)
    render(conn, "index.json", positions: positions)
  end

  def create(conn, %{"position" => position_params}) do
    changeset = Position.changeset(%Position{}, position_params)

    case Repo.insert(changeset) do
      {:ok, position} ->
        conn
        |> put_status(:created)
        |> put_resp_header("location", position_path(conn, :show, position))
        |> render("show.json", position: position)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(WheredafuckruApi.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    position = Repo.get!(Position, id)
    render(conn, "show.json", position: position)
  end

  def update(conn, %{"id" => id, "position" => position_params}) do
    position = Repo.get!(Position, id)
    changeset = Position.changeset(position, position_params)

    case Repo.update(changeset) do
      {:ok, position} ->
        render(conn, "show.json", position: position)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(WheredafuckruApi.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    position = Repo.get!(Position, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(position)

    send_resp(conn, :no_content, "")
  end
end
