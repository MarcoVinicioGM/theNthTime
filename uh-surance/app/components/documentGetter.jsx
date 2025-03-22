import { useState } from 'react';
import * as DocumentPicker from 'expo-document-picker';
import { Button, Text, View } from 'react-native';

const DocumentGetter = () => {
    const [fileResponse, setFileResponse] = useState(null);

    const handleSelection = async () => {
        try {
            const response = await DocumentPicker.getDocumentAsync({copyToCacheDirectory: true})
        } catch(error) {
            if (DocumentPicker.isCancel(error)) {
                console.log("User canceled file selection")
            } else {
                console.error("Error selecting file: ", error)
            }

            const selectedFile = response.assets?.[0] || response;
            if (!selectedFile) {
                console.log("Error selecting file")
                return;
            }

            setFileResponse(selectedFile)
        }
    }
    return(
        <View>
            <Button title='Choose File' onPress={handleSelection}/>
            {fileResponse && <Text>Selected File: {fileResponse.name}</Text>}
        </View>
    )
}

export default DocumentGetter;