import {useEffect, useState} from "react";
import MGithubZenResponse from "../model/MGithubZenResponse";
import {GithubService} from "../service/ServiceGithub";
import {Alert} from "react-bootstrap";

const CGithubHealthAlert = () => {

    const [zenResponse, setZenResponse] = useState<MGithubZenResponse | null>(null)

    useEffect(() => {

        //we need to declare this and then later call it, because `canContactGithub` is async.
        const fetchHealthStatus = async () => {
            const githubZenResponse = await GithubService.fetchGithubZenResponse();
            setZenResponse(githubZenResponse)
        }

        fetchHealthStatus()
            .catch(console.error)

    }, [])


    if (zenResponse?.healthy()) {
        return <>
            <Alert variant={"success"}>
                {zenResponse.asSuccessElt()}
            </Alert>
        </>
    }

    return <>
        <Alert variant={'danger'}>
            Cannot contact GitHub.
            {zenResponse?.asErrorElt()}
        </Alert>
    </>

}

export default CGithubHealthAlert