const Loader = () => {
  return (
    <div className="loader">
      <div className="wave-loader">
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
        <div className="wave-bar"></div>
      </div>
      <p className="loader-text">Loading repositories...</p>
    </div>
  );
};

export default Loader;
