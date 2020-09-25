/* eslint-disable linebreak-style */
import { testEnvironmentVariable } from '../settings';

export const indexPage = (req, res) => res.status(200).json({ message: testEnvironmentVariable });
