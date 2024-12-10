"use client"
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCopy, FaGift } from 'react-icons/fa';
import { RiPauseCircleFill, RiNeteaseCloudMusicFill } from "react-icons/ri";
import Countdown from '@/components/Countdown';
import { useInView } from "react-intersection-observer";

const InvitationEffect = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [playing, setPlaying] = useState(false);  // Track if the player is playing or paused
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 });

    const [copiedText, setCopiedText] = useState<string | null>(null);
    console.log({ copiedText });


    // Fungsi untuk menyalin teks ke clipboard
    const handleCopy = (text: string) => {
        navigator.clipboard.writeText(text);
        setCopiedText(text);
        setTimeout(() => setCopiedText(null), 2000); // Reset setelah 2 detik
    };

    const saveThedateref = useRef<HTMLDivElement | null>(null);

    // Fungsi untuk scroll ke bagian ketiga
    const handleSavethedate = () => {
        saveThedateref.current?.scrollIntoView({ behavior: "smooth" });
    };



    const togglePlayPause = () => {
        if (audioRef.current) {
            if (audioRef.current.paused) {
                audioRef.current.play(); // Play the audio if it's paused
                setPlaying(true); // Update state to "playing"
            } else {
                audioRef.current.pause(); // Pause the audio if it's playing
                setPlaying(false); // Update state to "paused"
            }
        }
    };

    const handleOpen = () => {
        setIsOpen(true);
        audioRef.current?.play()
    };

    return (
        <motion.div
            style={{
                backgroundImage: "url('/bg-nikahan-bunga.png')",
                backgroundRepeat: "repeat-x",
                backgroundSize: "cover"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="min-h-screen flex items-center justify-center text-white">
            <audio ref={audioRef}>
                <source src="/line-without-a-hook.mp3" type="audio/mp3" />
                Your browser does not support the audio element.
            </audio>

            {/* Animated Section to Rise Up */}
            <motion.div

                className="absolute top-0 left-0 w-full h-full z-10 flex items-center justify-center py-8"
                initial={{ y: 0 }}
                animate={isOpen ? { y: '-100%' } : { y: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
            >
                <motion.div
                    style={{
                        backgroundImage: "url('/open-inv.jpeg')",
                        backgroundRepeat: "repeat-x",
                        backgroundSize: "cover"
                    }}
                    className="bg-gradient-to-b from-transparent via-white/80 to-transparent p-8 h-screen rounded-xl shadow-lg max-w-lg text-center relative z-20 md:w-[90%] w-full"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
                >
                    <div className="bg-gradient-to-b from-transparent via-white/80 to-transparent p-2 absolute bottom-12 w-[90%] bg-opacity-30">
                        <motion.p
                            className="text-2xl font-bold mb-6 text-blue-900 bg-gradient-to-b via-white/80 to-transparent font-DancingScript"
                            initial={{ x: -200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.3 }}
                        >
                            Wedding Invitation
                        </motion.p>
                        <motion.h2
                            className="text-3xl font-bold text-gray-900 bg-gradient-to-b via-white/80 to-transparent  mb-2 font-DancingScript"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.6 }}
                        >
                            {`Meli & Jalal`}
                        </motion.h2>
                        <motion.p
                            className="text-md mb-4 text-gray-800 font-bold font-DancingScript "
                            initial={{ x: 200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.9 }}
                        >
                           Kepada bpk/ibu : 
                        </motion.p>
                        <motion.p
                            className="text-3xl mb-4 text-gray-900 font-bold font-DancingScript "
                            initial={{ x: 200, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 0.9 }}
                        >
                            Nama tamu
                        </motion.p>
                        <motion.div
                            className="text-lg mb-4 font-serif text-gray-900 font-DancingScript font-extrabold"
                            initial={{ y: 100, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 1, delay: 1.2 }}
                        >
                            <p>Wedding Date: 25th December 2024</p>
                        </motion.div>
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ duration: 0.8, delay: 1.5 }}
                        >
                            <button
                                onClick={handleOpen}
                                className="mt-4 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg">
                                Open Invitation
                            </button>
                        </motion.div>
                    </div>
                </motion.div>
            </motion.div>

            {/* Single play/pause button */}
            <button
                onClick={togglePlayPause}
                className="bg-blue-400 p-8 flex items-center justify-center"
                style={{
                    position: "fixed",
                    bottom: "0.1rem",
                    right: "0.1rem",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    zIndex: 1000,
                }}
            >
                {playing ? <RiNeteaseCloudMusicFill className='animate-spin text-blue-700 h-10 w-10' /> : <RiPauseCircleFill className='text-blue-700 h-10 w-10' />}
            </button>
            {/* Invitation Content */}

            {
                isOpen &&
                <div className="bg-white p-8 py-12 my-4 bg-opacity-35 rounded-xl shadow-lg max-w-lg text-center relative z-20 w-[90%]">
                    <div className='h-screen mt-12'>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h1 className="text-4xl font-bold font-DancingScript text-primary mb-4 text-blue-700">The Wedding Of</h1>
                            <div className="relative w-60 h-60 mx-auto mb-4">
                                <Image
                                    src="/melidanjalal1.png"
                                    alt="couple"
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-t-full rounded-b-lg "
                                />
                            </div>
                            <h2 className="mt-2 text-2xl font-DancingScript font-bold text-blue-700 text-accent">
                                {`Meli & Jalal`}
                            </h2>
                        </motion.div>

                        {/* Tulisan Harapan */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="mt-6"
                        >
                            <p className="text-blue-700 font-DancingScript">
                                Kami berharap Anda menjadi bagian dari hari istimewa kami!
                            </p>
                        </motion.div>

                        {/* Countdown di bawah tulisan */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="mt-6 flex items-center justify-center"
                        >
                            <Countdown targetDate="2024-12-25T00:00:00" />
                        </motion.div>

                        {/* Tombol Save The Date */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="mt-6"
                        >
                            <motion.button
                                onClick={handleSavethedate}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="px-6 py-3 mt-6 bg-primary rounded-full shadow-lg hover:bg-secondary font-DancingScript text-blue-700"
                            >
                                Save The Date
                            </motion.button>
                        </motion.div>
                    </div>
                    <div className="min-h-screen text-center">
                        {/* Bagian Header */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <p className="italic text-blue-700">بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ</p>
                            <h1 className="mt-2 text-2xl font-DancingScript text-blue-700 font-semibold text-primary">
                                {`Assalamu'alaikum Wr. Wb`}
                            </h1>
                        </motion.div>

                        {/* Bagian Undangan */}
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="mt-6"
                        >
                            <p className="text-gray-900">
                                Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i serta
                                kerabat sekalian untuk menghadiri acara pernikahan kami:
                            </p>
                        </motion.div>

                        {/* Gambar dan Profil */}
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="mt-8"
                        >
                            {/* Gambar */}
                            <div className="relative inline-block overflow-hidden rounded-full shadow-lg w-40 h-40 mx-auto">
                                <img
                                    src="/meli.png" // Ganti dengan path gambar yang sesuai
                                    alt="meli"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            {/* Nama dan Keterangan */}
                            <h2 className="mt-4 text-xl font-semibold text-primary font-DancingScript text-blue-700">Kristina Meliati</h2>
                            <p className="text-sm text-blue-600">
                                {`Putri dari Bpk Senen & Pratiwi`}
                            </p>
                        </motion.div>

                        {/* Icon "&" (opsional jika ingin menyambungkan kedua profil mempelai) */}
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.7, duration: 0.8 }}
                            className="mt-8 text-2xl font-bold text-blue-400"
                        >
                            {`&`}
                        </motion.div>

                        {/* Gambar dan Profil */}
                        <motion.div
                            ref={ref}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="mt-8"
                        >
                            {/* Gambar */}
                            <div className="relative inline-block overflow-hidden rounded-full shadow-lg w-40 h-40 mx-auto">
                                <img
                                    src="/jalal.png" // Ganti dengan path gambar yang sesuai
                                    alt="jalal"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                            {/* Nama dan Keterangan */}
                            <h2 className="mt-4 text-xl font-semibold text-primary font-DancingScript text-blue-700">Jalaludin Alkhotami</h2>
                            <p className="text-sm text-blue-600">
                                {`Putra dari Bpk Mughozin (alm.) & Ibu Nur Sangadah`}
                            </p>
                        </motion.div>
                    </div>
                    <div className="min-h-screen mt-12 ">
                        {/* Header Section */}
                        <motion.div
                            ref={saveThedateref}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-blue-900 text-white text-center py-8"
                        >
                            <h1 className="text-4xl font-bold font-DancingScript mb-4">
                                Save The Date
                            </h1>
                            <p className="text-lg italic">
                               {` "Dan segala sesuatu Kami ciptakan berpasang-pasangan agar kamu
                                mengingat (kebesaran Allah)."`}
                            </p>
                            <p className="text-md mt-2">(QS. Az Zariyat: 49)</p>
                        </motion.div>

                        {/* Event Cards */}
                        <div className="max-w-2xl mx-auto mt-12 space-y-8 px-4">
                            {/* Akad Nikah */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: false, amount: 0.2 }}
                                className=" shadow-lg rounded-lg p-6 text-center border border-gray-200"
                            >
                                <h2 className="text-3xl font-DancingScript text-orange-600 mb-2">
                                    Akad Nikah
                                </h2>
                                <p className="text-lg font-semibold text-gray-700">Rabu, 25 Desember 2024</p>
                                <p className="text-md text-gray-700 mt-2">Pukul 10.00 WIB</p>
                                <p className="text-sm text-gray-700 mt-2">
                                    Alamat: Ds Pagu Kec. Wates Kab. Kediri
                                </p>
                            </motion.div>

                            {/* Resepsi */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: false, amount: 0.2 }}
                                className=" shadow-lg rounded-lg p-6 text-center border border-gray-200"
                            >
                                <h2 className="text-3xl font-DancingScript text-orange-600 mb-2">
                                    Resepsi
                                </h2>
                                <p className="text-lg font-semibold text-gray-700">Rabu, 25 Desember 2024</p>
                                <p className="text-md text-gray-700 mt-2">Pukul 09.00 WIB</p>
                                <p className="text-sm text-gray-700 mt-2">
                                    Alamat: Ds Padangrejo Kec. Pubian, Kab. Lampung Tengah
                                </p>
                            </motion.div>
                        </div>
                    </div>
                    <div className="min-h-screen text-gray-900 mt-12">
                        {/* Header Section */}
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-center py-12"
                        >
                            <h1 className="text-4xl font-bold font-DancingScript mb-4">Amplop Digital</h1>
                            <p className="text-lg">
                                Doa Restu Anda merupakan karunia yang sangat berarti bagi kami.
                            </p>
                            <p className="text-md mt-2">
                                Dan jika memberi adalah ungkapan tanda kasih Anda, Anda dapat memberi
                                kado secara cashless.
                            </p>
                        </motion.div>

                        {/* Tombol Amplop Digital */}
                        <div className="text-center my-8">
                            <motion.button
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="px-6 py-3 bg-white text-blue-900 rounded-full shadow-lg hover:bg-gray-200 flex items-center justify-center mx-auto"
                            >
                                <FaGift className="mr-2" />
                                Klik Disini
                            </motion.button>
                        </div>

                        {/* Kartu Bank & Hadiah */}
                        <div className="max-w-2xl mx-auto space-y-6 px-4">
                            {/* Kartu Bank BCA */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: false, amount: 0.2 }}
                                className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between"
                            >
                                <div>
                                    <p className="text-lg font-bold text-gray-700">1234 5678 90</p>
                                    <p className="text-sm text-gray-500">Jalal</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <p className="text-sm text-blue-900 font-semibold">BCA</p>
                                    <button
                                        onClick={() => handleCopy("1234 5678 90")}
                                        className="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300 flex items-center"
                                    >
                                        <FaCopy className="text-gray-700 mr-2" />
                                    </button>
                                </div>
                            </motion.div>

                            {/* Kartu Bank DANA */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: false, amount: 0.2 }}
                                className="bg-white p-6 rounded-lg shadow-md flex items-center justify-between"
                            >
                                <div>
                                    <p className="text-lg font-bold text-gray-700">1234 5678 90</p>
                                    <p className="text-sm text-gray-500">Jalal</p>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <p className="text-sm text-blue-900 font-semibold">DANA</p>
                                    <button
                                        onClick={() => handleCopy("1234 5678 90")}
                                        className="bg-gray-200 px-3 py-1 rounded-md hover:bg-gray-300 flex items-center"
                                    >
                                        <FaCopy className="text-gray-700 mr-2" />
                                    </button>
                                </div>
                            </motion.div>

                            {/* Kartu Hadiah */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: false, amount: 0.2 }}
                                className="bg-white p-6 rounded-lg shadow-md text-center"
                            >
                                <p className="text-lg font-bold text-gray-700">Kirim Hadiah</p>
                                <p className="text-sm text-gray-500 mt-2">
                                    Nama Penerima: Jalaludin Alkhotami
                                </p>
                                <p className="text-sm text-gray-500">No. HP: 1234 5678 90</p>
                                <p className="text-sm text-gray-500">
                                    Alamat: Ds Poncowarno Kec. Kalirejo Kab. Lampung Tengah
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            }

        </motion.div>
    );
};

export default InvitationEffect;
