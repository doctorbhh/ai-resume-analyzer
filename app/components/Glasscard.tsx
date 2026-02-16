import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";
import { styled } from "styled-components";
import Button from "~/components/Button";

const Card = () => {
  const { auth, isLoading, error, clearError, fs, ai, kv } = usePuterStore();
  const navigate = useNavigate();
  const [files, setFiles] = useState<FSItem[]>([]);

  const loadFiles = async () => {
    const files = (await fs.readDir("./")) as FSItem[];
    setFiles(files);
  };

  useEffect(() => {
    loadFiles();
  }, []);

  useEffect(() => {
    if (!isLoading && !auth.isAuthenticated) {
      navigate("/auth?next=/wipe");
    }
  }, [isLoading]);

  const handleDelete = async () => {
    files.forEach(async (file) => {
      await fs.delete(file.path);
    });
    await kv.flush();
    loadFiles();
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <StyledWrapper>
      <div className="card">
        <div className="content">
          <div className="front">
            <h3 className="title">
              Authenticated as: <span>{auth.user?.username}</span>
            </h3>
            <p className="subtitle">Hover to see your files</p>
          </div>

          <div className="back">
            <h4 className="file-title">Existing Files</h4>
            <div className="file-list">
              {files.length === 0 ? (
                <p className="no-files">No files found</p>
              ) : (
                files.map((file) => (
                  <div key={file.id} className="file-item">
                    📄 {file.name}
                  </div>
                ))
              )}
            </div>

            <div className="button-container">
              <Button className="delete-btn" onClick={handleDelete}>
                Delete All Files
              </Button>
            </div>

            <p className="description">
              Tip: Always double-check before wiping your data
            </p>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;

  font-family: "Poppins", sans-serif;

  .card {
    width: 90%;
    max-width: 420px;
    height: 70vh; /* Dynamically fills most of the viewport */
    min-height: 360px; /* Ensures good content space on small screens */
    max-height: 600px;
    perspective: 1000px;
    margin: 1rem auto; /* Centered on mobile screens */
  }

  .content {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s ease;
    transform-style: preserve-3d;
    cursor: pointer;
  }

  .card:hover .content {
    transform: rotateY(180deg);
  }

  .front,
  .back {
    position: absolute;
    width: 100%;
    height: 80%;
    border-radius: 18px;
    backface-visibility: hidden;
    background: linear-gradient(135deg, #2a394f, #121b30);
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 1.5rem;
    color: #fff;
  }

  .front {
    background: linear-gradient(135deg, #2a394f, #121b30);
  }

  .back {
    background: linear-gradient(135deg, #2a394f, #121b30);
    transform: rotateY(180deg);
  }

  .title {
    font-size: 1.4rem;
    font-weight: 600;
  }

  .title span {
    font-weight: 700;
    color: #ffe082;
  }

  .subtitle {
    margin-top: 0.5rem;
    font-size: 1rem;
    color: #e0f7fa;
  }

  .file-title {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  .file-list {
    max-height: 120px;
    overflow-y: auto;
    width: 100%;
    text-align: left;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    padding: 0.8em;
  }

  .file-item {
    padding: 0.4em 0.5em;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .no-files {
    text-align: center;
    color: #f1f1f1;
    font-style: italic;
  }

  .button-container {
    margin-top: 1.2rem;
  }

  .delete-btn {
    background: #ff4b5c;
    border: none;
    padding: 0.6em 1.4em;
    border-radius: 8px;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .delete-btn:hover {
    background: #ff1e3c;
    box-shadow: 0 0 15px rgba(255, 78, 90, 0.6);
    transform: scale(1.05);
  }

  .description {
    font-size: 0.85rem;
    color: #e3f2fd;
    text-align: center;
    margin-top: 1rem;
  }
  /* Mobile optimization */
  @media (max-width: 500px) {
    .card {
      width: 95%;
      height: 75vh; /* Take more space on mobile */
      min-height: 380px;
    }

    .front,
    .back {
      padding: 1.5rem;
    }

    .title {
      font-size: 1.25rem;
    }

    .subtitle {
      font-size: 1rem;
    }
  }

  /* Larger screens get a balanced centered layout */
  @media (min-width: 768px) {
    .card {
      height: 60vh; /* Balanced desktop look */
      max-width: 460px;
    }
  }
`;

export default Card;
