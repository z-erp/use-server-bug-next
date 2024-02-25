// TestContext.tsx
import React, {createContext, Dispatch, ReactNode, useContext, useReducer} from 'react';

interface DtData {
    count: number;
}

interface TestContextType {
    testData: DtData;
    dispatch: Dispatch<Action>;
}

interface Action {
    type: string;
    payload?: any;
}

const initialState: DtData = {
    count: 0
};

const TestContext = createContext<TestContextType | undefined>(undefined);

const reducer = (state: DtData, action: Action): DtData => {
    switch (action.type) {
        case 'INCREMENT':
            return {...state, count: state.count + 1};
        default:
            return state;
    }
};

export const TestProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [testData, dispatch] = useReducer(reducer, initialState);

    return (
        <TestContext.Provider value={{testData, dispatch}}>
            {children}
        </TestContext.Provider>
    );
};

export const useTest = (): TestContextType => {
    const context = useContext(TestContext);
    if (!context) {
        throw new Error('useTest must be used within a TestProvider');
    }
    return context;
};
