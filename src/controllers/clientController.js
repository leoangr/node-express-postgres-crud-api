import * as clientService from '../services/clientServices.js';

export const getClients = async (req, res) => {
    try {
        
        const clients = await clientService.getClients();
        res.status(200).json(clients);

    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message});   
    }
};

export const createClient = async (req, res) => {
    try {
        const clientData = req.body;
        const newClient = await clientService.createClient(clientData);;
        res.status(200).json(newClient);

    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message});   
    }
};

export const updateClient = async (req, res) => {
    try {
        const clientId = req.params.id;
        const clientData = req.body;
        const updateClient = await clientService.updateClient(clientData, clientId);
        if (!updateClient) {
            return res.status(404).json({error: 'Client not found'});   
        }
        res.status(200).json(updateClient);

    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message});   
    }
};

export const deleteClient = async (req, res) => {
    try {
        const clientId = req.params.id;
        const deleted = await clientService.deleteClient(clientId);
        if (!deleted) {
            return res.status(404).json({error: 'Client not found'});   
        }
        res.status(200).send();

    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message});   
    }
};

export const searchClients = async (req, res) => {
    try {
        const searchTerms = req.query.q;
        const clients = await clientService.searchClients(searchTerms);
        res.status(200).json(clients);
    } catch (error) {
        console.error(error);
        res.status(500).json({error: error.message});   
    }
}