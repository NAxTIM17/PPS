import { CustomProvider } from 'rsuite';

const ProvidersWrapper = ({ children }) => {
    return (
        <CustomProvider>
                {children}
        </CustomProvider>
    )
}

export default ProvidersWrapper;