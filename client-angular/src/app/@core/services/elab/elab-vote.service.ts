import { environment } from "@env/environment";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

/**
 * ELAB backend interaction service.
 */
@Injectable({
  providedIn: 'root'
})
export class ElabVoteService {
  private static readonly voteUrl = environment.elabApiUrl + '/v1/proposal';

  constructor(private http: HttpClient) {}

  /**
   * Get the current voting period
   */
  getVotingPeriod(): Promise<{startDate: Date, endDate: Date, isTodayInVotingPeriod: boolean}> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.http.get<{startDate: Date, endDate: Date, isTodayInVotingPeriod: boolean}>(`${ElabVoteService.voteUrl}/votingPeriod`).toPromise()
  }

  /**
   * Add a new vote
   * @param proposalId Proposal ID concerned
   * @param vote Vote (for or against)
   */
  create(proposalId: string, vote: string): Promise<unknown> {
    return this.http.post<unknown>(`${ElabVoteService.voteUrl}/${proposalId}/vote`, { vote: vote }).toPromise()
  }
}