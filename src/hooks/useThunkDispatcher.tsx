import { ThunkDispatchType } from '../store';
import { useDispatch } from 'react-redux';

export const useThunkDispatch = () => useDispatch<ThunkDispatchType>();
