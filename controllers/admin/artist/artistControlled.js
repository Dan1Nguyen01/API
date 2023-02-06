const express = require('express');
const { default: mongoose } = require('mongoose');
const Artist = require('../../../models/artist model/artist-model');

//get all artists
const getAllArtist = async(req,res)=> {
    const artists = await Artist.find({}).sort({createAt:-1});
    res.status(200).json(artists);
}

//get an artist
const getAnArtist = async(req,res)=>{
    const {id} = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:'No such artist'})
    }

    const artist = await Artist.findById(id);

    if(!artist){
        return res.status(404).json({message:err.message});
    }
    res.status(200).json(artist)
}

//create an artist
const createArtist = async(req,res)=>{
    const {key,
        userID, 
        artistName, 
        artistFollowers,
        albumArtist,
        albumArt,
        totalTracks,
        isPublished,
        publishDate,
        albumSongs
    }= req.body
    try{
        const artist = await Artist.create({id,
            userID, 
            artistName, 
            artistFollowers,
            albumArtist,
            albumArt,
            totalTracks,
            isPublished,
            publishDate,
            albumSongs
        })
        res.status(200).json(artist);
    }catch(err){
        res.status(400).jason({message:err.message})
    }

}

//update an artist
const updateArtist= async(req,res)=>{
    const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:'No such artist'})
    }

    const artist = await Artist.findByIdAndUpdate({_id: id}, {
        ...req.body
    })

    if(!artist){
        return res.status(404).json({message:err.message});
    }

    res.status(200).json(artist);
}

//
const deleteArtist = async(req,res)=>{
        const {id} = req.params;
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({message:'No such artist'})
    }

    const artist = await Artist.findOneAndDelete({_id: id});

    if(!artist){
        return res.status(404).json({message:err.message});
    }

    res.status(200).json(artist)
}

module.exports = {
    getAllArtist,
    getAnArtist,
    createArtist,
    updateArtist,
    deleteArtist
}