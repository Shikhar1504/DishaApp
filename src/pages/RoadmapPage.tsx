import { useParams, useNavigate } from "react-router-dom";
import CareerRoadmap from "../components/CareerRoadmap";

const RoadmapPage = () => {
  const { courseName } = useParams<{ courseName: string }>();
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1); // Go back to previous page
  };

  // Decode URL parameter
  const decodedCourseName = courseName ? decodeURIComponent(courseName) : "B.Sc. Computer Science";

  return <CareerRoadmap courseName={decodedCourseName} onClose={handleClose} />;
};

export default RoadmapPage;