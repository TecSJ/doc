import { createControlHandler } from './create.handlers.control.adapter';
import { findAllControlHandler } from './findAll.handlers.control.adapter';
import { findOneControlHandler } from './findOne.handlers.control.adapter';

export const controlAdapter = {
    createControlHandler,
    findAllControlHandler,
    findOneControlHandler
};