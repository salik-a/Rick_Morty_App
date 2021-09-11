import React, { useState, useEffect } from 'react';


function getUrls(episode) {

    const [url, setUrl] = useState("");


    const getUrl = async () => {

        try {
            switch (episode) {

                case 'S01E01':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-1/bolum-1")
                    break;
                case 'S01E02':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-1/bolum-2")
                    break;
                case 'S01E03':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-1/bolum-3")
                    break;
                case 'S01E04':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-1/bolum-4")
                    break;
                case 'S01E05':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-1/bolum-5")
                    break;
                case 'S01E06':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-1/bolum-6")
                    break;
                case 'S01E07':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-1/bolum-7")
                    break;
                case 'S01E08':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-1/bolum-8")
                    break;
                case 'S01E09':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-1/bolum-9")
                    break;
                case 'S01E10':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-1/bolum-10")
                    break;
                case 'S01E11':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-1/bolum-11")
                    break;
                case 'S02E01':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-2/bolum-1")
                    break;
                case 'S02E02':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-2/bolum-2")
                    break;
                case 'S02E03':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-2/bolum-3")
                    break;
                case 'S02E04':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-2/bolum-4")
                    break;
                case 'S02E05':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-2/bolum-5")
                    break;
                case 'S02E06':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-2/bolum-6")
                    break;
                case 'S02E07':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-2/bolum-7")
                    break;
                case 'S02E08':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-2/bolum-8")
                    break;
                case 'S02E09':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-2/bolum-9")
                    break;
                case 'S02E10':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-2/bolum-10")
                    break;
                case 'S03E01':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-3/bolum-1")
                    break;
                case 'S03E02':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-3/bolum-2")
                    break;
                case 'S03E03':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-3/bolum-3")
                    break;
                case 'S03E04':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-3/bolum-4")
                    break;
                case 'S03E05':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-3/bolum-5")
                    break;
                case 'S03E06':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-3/bolum-6")
                    break;
                case 'S03E07':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-3/bolum-7")
                    break;
                case 'S03E08':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-3/bolum-8")
                    break;
                case 'S03E09':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-3/bolum-9")
                    break;
                case 'S03E10':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-3/bolum-10")
                    break;
                case 'S04E01':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-4/bolum-1")
                    break;
                case 'S04E02':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-4/bolum-2")
                    break;
                case 'S04E03':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-4/bolum-3")
                    break;
                case 'S04E04':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-4/bolum-4")
                    break;
                case 'S04E05':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-4/bolum-5")
                    break;
                case 'S04E06':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-4/bolum-6")
                    break;
                case 'S04E07':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-4/bolum-7")
                    break;
                case 'S04E08':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-4/bolum-8")
                    break;
                case 'S04E09':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-4/bolum-9")
                    break;
                case 'S04E10':
                    setUrl("https://dizilab.pw/rick-and-morty/sezon-4/bolum-10")
                    break;
                default:
                    Alert.alert("Page NOT FOUND");

            }
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getUrl()
    }, []);

    return url;

};

export default getUrls;