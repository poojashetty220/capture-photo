import { useEffect, useRef, useState } from "react";
import Webcam from 'react-webcam';


function CameraCapture() {
    const [capturedImage, setCapturedImage] = useState('');
    const [cameraSide, setCameraSide] = useState('front');
    const cameraRef = useRef(null);
    const canvasRef = useRef(null);
    const [showDevice, setShowDevice] = useState(true);

    useEffect(() => {
        setShowDevice(true)
    }, [cameraSide])

    const videoConstraints = {
        facingMode: cameraSide === 'front' ? "user" : { exact: "environment" },
        aspectRatio: 16/9,
        focusMode: 'auto',
        focusDistance: 10
    };

    const handleCapture = async() => {
        const video = document.querySelector('video');
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
  
        if (video) {
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            context.drawImage(video, 0, 0);
            const imageDataURL = canvas.toDataURL('image/jpeg');
            const imageBlob = imageDataURL;
            setCapturedImage(imageBlob);
        }
    };

    return (
        <div>
            <div className="w-full  relative xlg:flex lg:block xlg:justify-center">
                {capturedImage === '' ? 
                    <>
                        {
                            showDevice ?
                            <>
                                {(capturedImage === '') && 
                                <Webcam
                                    audio={false}
                                    ref={cameraRef}
                                    screenshotQuality={1}
                                    playsInline
                                    className='h-full lg:w-[420px] xlg:w-[300px]'
                                    videoConstraints={videoConstraints}
                                    onUserMediaError={() => cameraRef.current && setShowDevice(false)}
                                    // capture={cameraGranted}
                                />}
                            </>
                            : <img src='/device-not-active.svg' alt='not active' className='lg:w-[420px] xlg:w-[300px]' />
                            
                        }
                    </>
                    : <div className="flex flex-col items-center justify-center">
                        <img src={capturedImage} alt='photo' className='lg:w-[420px] xlg:w-[300px]' /><br />
                        <button onClick={() => {setCapturedImage(''); setCameraSide('front')}} className={`bg-white text-[#007EB4] font-bold text-base shadow-blue border border-[#D7D7D7] rounded-[10px] h-[40px] w-[180px] flex justify-center items-center gap-[10px]`}>
                            Capture Again
                        </button>
                    </div>
                }
            </div>
            <div className='flex w-[420px] mt-4'>
                <div className='flex justify-center gap-3 w-full'>
                    {capturedImage === '' && 
                    <button data-testid="switch_camera" onClick={() => setCameraSide(cameraSide === 'front' ? 'back': 'front')} className={` text-[#333] bg-white h-[40px] w-[160px] shadow-black rounded-[10px] font-bold text-base  flex justify-center items-center gap-[10px]`}>
                        Switch Camera
                    </button>}
                    {capturedImage === '' && <button title={showDevice ? '' : 'Device is not active'} disabled={!showDevice} data-testid="capture_photo" onClick={() => showDevice ? handleCapture() : ''} className={`bg-white disabled:opacity-50 text-[#007EB4] font-bold text-base shadow-blue border border-[#D7D7D7] rounded-[10px] h-[40px] w-[150px] flex justify-center items-center gap-[10px]`}>
                        Take Photo
                    </button>}
                </div>
            </div>
            <canvas ref={canvasRef} style={{ display: 'none' }} />
        </div>
    );
}

export default CameraCapture;