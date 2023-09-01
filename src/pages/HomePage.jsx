import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>This is homepage</h1>
      <div>
        <p
          onClick={() => navigate("/sum")}
          className="link-primary"
          style={{ cursor: "pointer" }}
        >
          Sum
        </p>
      </div>
      <div>
        <p
          onClick={() => navigate("/lottery")}
          className="link-primary"
          style={{ cursor: "pointer" }}
        >
          Lottery
        </p>
      </div>
      <div>
        <p
          onClick={() => navigate("/youbike/station-info")}
          className="link-primary"
          style={{ cursor: "pointer" }}
        >
          Youbike
        </p>
      </div>
    </div>
  );
}
