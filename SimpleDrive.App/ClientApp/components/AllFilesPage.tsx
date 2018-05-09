import * as React from 'react';
import File from '../models/File';
import FileComponent from './File';
import FileGridComponent from './FileGrid';
import fileService from '../services/FileService';

export interface AllFilesPageProps {
}

interface AllFilesPageState {
    files: File[];
}

const labelStyle: React.CSSProperties = {
    display: 'none'
};

const divStyle: React.CSSProperties = {
    width: '100%',
    marginLeft: '10px',
    marginRight: '10px',    
};

const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gridTemplateRows: 'auto',
    gridGap: '10px',
    marginTop: '10px'
};

const uploadBtnContainer: React.CSSProperties = {
    textAlign: 'center',
    minHeight: '5em'
};

export default class AllFilesPage extends React.Component<AllFilesPageProps, AllFilesPageState> {
    private inputFileRef: HTMLInputElement;

    constructor(props: AllFilesPageProps) {
        super(props);

        this.state = {
            files: []
        };
    }

    async componentDidMount() {
        this.setState({
            files: await fileService.listAll()
        });
    }
    
    private deleteFile = async (file: File) => {
        await fileService.delete(file.id);
        this.setState({
            files: this.state.files.filter(f => f.id !== file.id)
        });
    }

    render() {
        return (
            <div style={divStyle}>
                <FileGridComponent files={this.state.files} onDeleted={this.deleteFile}/>
            </div>
        );
    }
}
