import { useState, useEffect } from "react";

export default function App() {
  const [nftId, setNftId] = useState("");
  const [showPreview, setShowPreview] = useState(false);
  const [previewNft, setPreviewNft] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState(false);

  const contributors = [
    {
      name: "@MurinXDA",
      link: "https://waitlist.mitosis.org/profile/G29Q42",
      image: "/murin.png",
      xProfile: "https://x.com/MurinXDA",
      refCode: "https://waitlist.mitosis.org/my-page?code=G29Q42",
    },
    {
      name: "@atanikun",
      link: "https://waitlist.mitosis.org/profile/6QQ31I",
      image: "/atanikun.png",
      xProfile: "https://x.com/atanikun",
      refCode: "https://waitlist.mitosis.org/my-page?code=6QQ31I",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nftId.trim()) return;

    // Handle NFT search logic here
    console.log("Searching for NFT ID:", nftId);

    setIsLoading(true);
    setLoadError(false);

    // Set the NFT data with Cloudinary URL
    setPreviewNft({
      id: nftId,
      name: `Halloween NFT #${nftId}`,
      image: `https://res.cloudinary.com/dzi0dkvda/image/upload/halloween/${nftId}.jpg`,
    });

    setShowPreview(true);
  };

  const closePreview = () => {
    setShowPreview(false);
    setIsLoading(false);
    setLoadError(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const handleImageError = () => {
    setIsLoading(false);
    setLoadError(true);
  };

  return (
    <div className="min-h-screen  bg-[#1a1721] text-orange-500 flex flex-col relative overflow-hidden">
      {/* Background decorations */}
      <img
        src="/top-right-spider-web.png"
        alt=""
        className="absolute top-[-100px] right-[-100px] hidden md:block"
      />
      <img
        src="/bottom-left-spider-web.png"
        alt=""
        className="absolute bottom-[-100px] left-[-100px] hidden md:block"
      />

      {/* Header */}
      <header className="pt-2 pb-1 relative z-10">
        <h1 className="text-2xl md:text-3xl font-bold font-creepster text-center">
          Morse Halloween Generator
        </h1>
      </header>

      {/* Main content */}
      <main className="flex-1 flex flex-col items-center justify-center px-3 py-1 relative z-10">
        <img
          src="/halloween-pumpkin.png"
          alt=""
          className="absolute left-[400px] top-[30px] w-[80px] hidden md:block"
        />
        <div className="flex flex-col md:flex-row gap-6 md:gap-6 items-center justify-center w-full max-w-4xl">
          {/* Left content */}
          <div className="w-full md:w-1/2 z-10">
            <div className="mb-3">
              <h2 className="text-4xl md:text-4xl lg:text-5xl font-bold font-creepster leading-tight text-center md:text-left">
                Input
                <br />
                NFTs
                <br />
                Id's Below
              </h2>

              <p className="text-base md:text-lg font-montserrat mt-2 text-center md:text-left">
                Explore the spookiest NFTs
                <br />
                on the blockchain
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              className="space-y-2 max-w-md mx-auto md:mx-0"
            >
              <input
                type="text"
                placeholder="NFT ID"
                value={nftId}
                onChange={(e) => setNftId(e.target.value)}
                className="w-full px-3 py-2 rounded-lg bg-transparent border-2 border-orange-500 text-orange-500 placeholder-orange-500/50 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <button
                type="submit"
                className="w-full md:w-auto px-5 py-2 bg-orange-500 text-[#1a1721] font-bold rounded-lg text-base hover:scale-105 active:scale-95 transition-transform"
              >
                Enter
              </button>
            </form>
          </div>

          {/* Right content - Halloween character */}
          <div className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0">
            <img
              src="/morse-character.png"
              alt="Halloween character with witch hat"
              className="max-h-[25vh] md:max-h-[50vh] w-auto object-contain hidden md:block"
            />
          </div>
          <div className="hidden md:flex flex-col">
            <img
              src="/halloween-pumpkin.png"
              alt=""
              className="relative left-[150px] z-10"
            />
            <img
              src="/halloween-pumpkin.png"
              alt=""
              className="z-10 left-[100px]"
            />
          </div>
        </div>
      </main>

      {/* Contributors section */}
      <div className="w-full py-4 px-3 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-lg md:text-xl font-creepster text-center mb-4">
            Contributors
          </h3>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
            {contributors.map((contributor) => (
              <div
                key={contributor.name}
                className="group relative flex flex-col items-center mb-6 sm:mb-0"
              >
                <a
                  href={contributor.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center transition-transform hover:scale-105 mb-2"
                >
                  <div className="w-16 h-16 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-orange-500 mb-2 bg-[#2a2731]">
                    <img
                      src={contributor.image}
                      alt={contributor.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-sm font-montserrat">
                    {contributor.name}
                  </span>
                </a>
                <div className="flex flex-col sm:hidden items-center">
                  <a
                    href={contributor.xProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs hover:text-orange-300 mb-1.5"
                  >
                    Twitter Profile
                  </a>
                  <a
                    href={contributor.refCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs hover:text-orange-300"
                  >
                    Referral Link
                  </a>
                </div>
                <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition-opacity absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 bg-[#2a2731] p-1.5 rounded-lg shadow-lg z-50 w-32 md:w-36">
                  <a
                    href={contributor.xProfile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-xs sm:text-sm mb-1 hover:text-orange-300 text-center"
                  >
                    Twitter Profile
                  </a>
                  <a
                    href={contributor.refCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-xs sm:text-sm hover:text-orange-300 text-center"
                  >
                    Referral Link
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* NFT Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-[#2a2731] border-2 border-orange-500 rounded-lg max-w-md w-full">
            <div className="p-4 sm:p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl sm:text-2xl font-creepster">
                  NFT Preview
                </h3>
                <button
                  onClick={closePreview}
                  className="text-orange-500 hover:text-orange-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {previewNft && (
                <div>
                  <div className="bg-[#1a1721] p-2 rounded-lg border border-orange-500/30 min-h-[200px] flex items-center justify-center">
                    {isLoading && (
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"></div>
                        <p className="mt-2 text-sm">Loading NFT...</p>
                      </div>
                    )}

                    {loadError && (
                      <div className="text-center p-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-12 w-12 mx-auto text-orange-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                          />
                        </svg>
                        <p className="mt-2">Could not load NFT #{nftId}</p>
                        <p className="text-sm mt-1">
                          Please check the ID and try again
                        </p>
                      </div>
                    )}

                    <img
                      src={previewNft.image}
                      alt={`Halloween NFT #${nftId}`}
                      className={`w-full h-auto object-contain max-h-[300px] mx-auto ${
                        isLoading || loadError ? "hidden" : "block"
                      }`}
                      onLoad={handleImageLoad}
                      onError={handleImageError}
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      onClick={closePreview}
                      className="w-full px-5 py-2 bg-orange-500 text-[#1a1721] font-bold rounded-lg text-base hover:scale-105 active:scale-95 transition-transform"
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
