import Modal from "react-bootstrap/Modal";
import { Image } from "react-bootstrap";

interface ImageModalProps {
  show: boolean;
  onHide: () => void;
  imageSrc: string;
}

export default function ImageModal({
  show,
  onHide,
  imageSrc,
}: ImageModalProps) {
  return (
    <Modal
      show={show}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      onHide={onHide}
    >
      <Modal.Header closeButton />
      <Modal.Body>
        <Image fluid src={imageSrc}></Image>
      </Modal.Body>
    </Modal>
  );
}
