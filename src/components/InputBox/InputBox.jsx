import React, { useState } from "react";
import axios from 'axios'

const InputBox = ({ setLyrics }) => {
    const [singer, setSigner] = useState('')
    const [song, setSong] = useState('')

    const fetchLyrics = async (event) => {
        event.preventDefault();
        try {
            const lyrics = await axios.get(`https://api.lyrics.ovh/v1/${singer}/${song}`)
            setLyrics(lyrics.data.lyrics)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="container">
                <form onSubmit={fetchLyrics}>
                    <input
                        type="text"
                        id="singer_name"
                        placeholder="Signer name"
                        required
                        value={singer}
                        onChange={(e) => setSigner(e.target.value)}
                    />
                    <input
                        type="text"
                        id="song_name"
                        placeholder="Song"
                        required
                        value={song}
                        onChange={(e) => setSong(e.target.value)}
                    />
                    <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>
        </>
    )
}

export default InputBox
