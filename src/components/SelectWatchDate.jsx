import { memo } from "react";

export const SelectWatchDate = memo(() => {
  return (
    <div>
      <label>鑑賞日:</label>
      <br />
      <select className='p-2 border-2 rounded-md border-gray-400 border-solid focus:outline-none focus:border-black' name='year'>
        <option>2015</option>
        <option>2016</option>
        <option>2017</option>
        <option>2018</option>
        <option>2019</option>
        <option>2020</option>
        <option selected>2021</option>
        <option>2022</option>
        <option>2023</option>
        <option>2024</option>
        <option>2025</option>
      </select>{' '}
      年{' '}
      <select className='p-2 border-2 rounded-md border-gray-400 border-solid focus:outline-none focus:border-black' name='month'>
        <option>01</option>
        <option>02</option>
        <option>03</option>
        <option>04</option>
        <option>05</option>
        <option>06</option>
        <option>07</option>
        <option>08</option>
        <option>09</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
      </select>{' '}
      月{' '}
      <select className='p-2 border-2 rounded-md border-gray-400 border-solid focus:outline-none focus:border-black' name='day'>
        <option>01</option>
        <option>02</option>
        <option>03</option>
        <option>04</option>
        <option>05</option>
        <option>06</option>
        <option>07</option>
        <option>08</option>
        <option>09</option>
        <option>10</option>
        <option>11</option>
        <option>12</option>
        <option>13</option>
        <option>14</option>
        <option>15</option>
        <option>16</option>
        <option>17</option>
        <option>18</option>
        <option>19</option>
        <option>20</option>
        <option>21</option>
        <option>22</option>
        <option>23</option>
        <option>24</option>
        <option>25</option>
        <option>26</option>
        <option>27</option>
        <option>28</option>
        <option>29</option>
        <option>30</option>
        <option>31</option>
      </select>{' '}
      日{' '}
    </div>
  );
});
