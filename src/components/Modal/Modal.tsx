interface ModalProps {
  images: string[];
  toggleModal: (type: string | null) => void;
}

const ModalForImage: React.FC<ModalProps> = ({ images, toggleModal }) => {
  return (
    <div className="modal_overlay relative">
      {/* Modal */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        onClick={() => toggleModal(null)}
      >
        {/* Modal Content */}
        <div
          className="relative bg-white p-4 rounded shadow-lg w-4/5 h-4/5"
          onClick={(e) => e.stopPropagation()} // Prevent click propagation
        >
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-black"
            onClick={() => toggleModal(null)}
          >
            ✕
          </button>
          {images.length === 1 ? (
            <img
              src={images[0]}
              alt="Sample"
              className="w-full h-full object-cover"
            />
          ) : (
            images.map((image) => (
              <img
                key={image}
                src={image}
                alt="Sample"
                className="w-full h-full object-cover"
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalForImage;
